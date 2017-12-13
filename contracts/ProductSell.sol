pragma solidity ^0.4.15;


// Contract for one particular product
contract Sell {
    address public _owner;
    struct Product {
        string name;
        uint cost;
        bool ready;
    }
    
    struct Supplier {
        string name;
        uint cost;
        bool isVal;
        
    }
    struct Client {
        string name;
        bool isVal;
    }
    
    uint32 public _current_ingredients;
    uint public _current_ingredients_cost;
    mapping(bytes32 => uint) public _ingredients;
    bytes32[] public _ingredients_list;
    address[] public _suppliers_address;
    mapping(address => Client) public _clients;
    mapping(address => Supplier) public _suppliers;
    // mapping(string => Product) products;
    Product public _product;
    
    modifier readyProduct {
        require(_product.ready);
        _;
    }
    
    modifier onlyOwner {
        require(_owner == msg.sender);
        _;
    }
    
    modifier onlyNewClient {
        require(_clients[msg.sender].isVal == false);
        _;
        }
        
    
    function Sell(string product_name, uint product_cost, bytes32[] ingredients, uint[] costs) public {
        require(ingredients.length == costs.length);
        require(ingredients.length > 0);
        require(costs.length > 0);
        require(product_cost > 0);
        _owner = msg.sender;
        _product = Product({name: product_name, cost: product_cost, ready: false});
        _current_ingredients_cost = 0;
        _current_ingredients = 0;
        for(uint32 i = 0; i < ingredients.length; i++) {
            addIngredient(ingredients[i], costs[i]);
        }
    }
    
    function addIngredient(bytes32 ingredient, uint cost) internal onlyOwner {
        require(_current_ingredients_cost + cost < _product.cost);
        require(cost > 0);
        // Condition to prevent adding more than one ingredient of one name
        require(_ingredients[ingredient] == 0);
        _current_ingredients_cost = cost + _current_ingredients_cost;
        _ingredients[ingredient] = cost;
        _ingredients_list.push(ingredient);
    }
        
    function productReady() public constant returns(bool) {
        return _product.ready;
        }
    
    function registerSupplier(string supplier_name, bytes32 ingredient) public {
        require(_ingredients[ingredient] != 0);
        require(_current_ingredients < _ingredients_list.length);
        // require(_supplier[msg.sender].cost == 0);
        uint ing = _ingredients[ingredient];
        if (_suppliers[msg.sender].isVal) {
            _suppliers[msg.sender].cost += ing;
        } else {
            _suppliers[msg.sender] = Supplier({name: supplier_name, cost: ing, isVal: true});
            _suppliers_address.push(msg.sender);
        }
        // _current_ingredients_cost = cost + _current_ingredients_cost;
        _current_ingredients++;
        if (_current_ingredients == _ingredients_list.length) {
            _product.ready = true;
        }
        
    }
    
    function registerClient(string client_name) public onlyNewClient {
        _clients[msg.sender] = Client({name: client_name, isVal: true});
    }
    
    function buy() public payable {
        for (uint i = 0; i < _suppliers_address.length; i++) {
            address addr = _suppliers_address[i];
            addr.transfer(_suppliers[addr].cost);
        }
        _owner.transfer(msg.value - _current_ingredients_cost);
    }   
    
    function stopSelling() public onlyOwner {
        selfdestruct(_owner);
    }
    
}

// Wrapper contains all contracts addresses and interface to manipulate them
contract ProductSell {
    address _owner;
    address[] public _products;
    
    function ProductSell() public {
        _owner = msg.sender;
    }
    
    function addProduct(string name, uint cost, bytes32[] ingredients, uint[] ingredients_costs) public {
        address sell = new Sell(name, cost, ingredients, ingredients_costs);
        _products.push(sell);
    }
    
    function getProducts() public constant returns(Sell[] products) {
        for(uint256 i; i < _products.length; i++) {
            products[i] = Sell(_products[i]);
        }
    }
    
    function getProduct(uint product_id) public constant returns(Sell product) {
        product = Sell(_products[product_id]);
    }
    
    function registerSupplier(uint product_id, string supplier_name, bytes32 ingredient) public {
        Sell product = Sell(_products[product_id]);
        product.registerSupplier(supplier_name, ingredient);
    }
    
    function registerClient(uint product_id, string client_name) public {
        Sell product = Sell(_products[product_id]);
        product.registerClient(client_name);
    }
    
    function stopSelling(uint product_id) public {
        Sell product = Sell(_products[product_id]);
        require(msg.sender == product._owner());
        product.stopSelling();
        delete _products[product_id];
    }

}