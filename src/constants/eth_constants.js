module.exports = {
  abi: JSON.parse('[{"constant":true,"inputs":[],"name":"_product","outputs":[{"name":"name","type":"string"},{"name":"cost","type":"uint256"},{"name":"ready","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"_suppliers","outputs":[{"name":"name","type":"string"},{"name":"cost","type":"uint256"},{"name":"isVal","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"client_name","type":"string"}],"name":"registerClient","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_current_ingredients","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ingredient","type":"string"},{"name":"cost","type":"uint256"}],"name":"addIngredient","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"_clients","outputs":[{"name":"name","type":"string"},{"name":"isVal","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"supplier_name","type":"string"},{"name":"ingredient","type":"string"}],"name":"registerSupplier","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_current_ingredients_cost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"_suppliers_address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"_ingredients_list","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"productReady","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"product_name","type":"string"},{"name":"product_cost","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'),
   bytecode: '0x6060604052341561000f57600080fd5b604051610e37380380610e37833981016040528080518201919060200180519150506000811161003e57600080fd5b60008054600160a060020a03191633600160a060020a03161790556060604051908101604090815283825260208201839052600090820152600781518190805161008c9291602001906100d1565b50602082015181600101556040820151600291909101805460ff1916911515919091179055505060006001819055805460a060020a63ffffffff02191690555061016c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011257805160ff191683800117855561013f565b8280016001018555821561013f579182015b8281111561013f578251825591602001919060010190610124565b5061014b92915061014f565b5090565b61016991905b8082111561014b5760008155600101610155565b90565b610cbc8061017b6000396000f3006060604052600436106100c45763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632fb958fa81146100c95780633c60f05f146101755780634c6448fe1461019457806351c478cc146101e7578063597666981461021357806379d8651d14610266578063a6f2ae3a14610316578063ac7e1e321461031e578063b2bdfa7b146103b1578063b68e491b146103e0578063c474e96814610405578063f086cced1461041b578063f9071146146104a8575b600080fd5b34156100d457600080fd5b6100dc6104cf565b604051602081018390528115156040820152606080825284546002600019610100600184161502019091160490820181905281906080820190869080156101645780601f1061013957610100808354040283529160200191610164565b820191906000526020600020905b81548152906001019060200180831161014757829003601f168201915b505094505050505060405180910390f35b341561018057600080fd5b6100dc600160a060020a03600435166104df565b341561019f57600080fd5b6101e560046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506104fd95505050505050565b005b34156101f257600080fd5b6101fa610588565b60405163ffffffff909116815260200160405180910390f35b341561021e57600080fd5b6101e560046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965050933593506105ac92505050565b341561027157600080fd5b610285600160a060020a03600435166106fb565b6040518115156020820152604080825283546002600019610100600184161502019091160490820181905281906060820190859080156103065780601f106102db57610100808354040283529160200191610306565b820191906000526020600020905b8154815290600101906020018083116102e957829003601f168201915b5050935050505060405180910390f35b6101e5610714565b341561032957600080fd5b6101e560046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496506107ce95505050505050565b34156103bc57600080fd5b6103c4610a48565b604051600160a060020a03909116815260200160405180910390f35b34156103eb57600080fd5b6103f3610a57565b60405190815260200160405180910390f35b341561041057600080fd5b6103c4600435610a5d565b341561042657600080fd5b610431600435610a85565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561046d578082015183820152602001610455565b50505050905090810190601f16801561049a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104b357600080fd5b6104bb610b40565b604051901515815260200160405180910390f35b6008546009546007919060ff1683565b60066020526000908152604090206001810154600282015460ff1683565b600160a060020a03331660009081526005602052604090206001015460ff161561052657600080fd5b6040805190810160409081528282526001602080840191909152600160a060020a0333166000908152600590915220815181908051610569929160200190610b4a565b506020820151600191909101805460ff19169115159190911790555050565b60005474010000000000000000000000000000000000000000900463ffffffff1681565b60005433600160a060020a039081169116146105c757600080fd5b6008546001548201106105d957600080fd5b600081116105e657600080fd5b6002826040518082805190602001908083835b602083106106185780518252601f1990920191602091820191016105f9565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051908190039020541561065757600080fd5b6001805482019055806002836040518082805190602001908083835b602083106106925780518252601f199092019160209182019101610673565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040519081900390205560038054600181016106d98382610bc8565b60009283526020909220018380516106f5929160200190610b4a565b50505050565b6005602052600090815260409020600181015460ff1682565b6000805b60045482101561078f57600480548390811061073057fe5b6000918252602080832090910154600160a060020a0316808352600690915260409182902060010154909250829181156108fc02919051600060405180830381858888f19350505050151561078457600080fd5b600190910190610718565b600054600154600160a060020a0390911690340380156108fc0290604051600060405180830381858888f1935050505015156107ca57600080fd5b5050565b60006002826040518082805190602001908083835b602083106108025780518252601f1990920191602091820191016107e3565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405190819003902054151561084257600080fd5b60035460005474010000000000000000000000000000000000000000900463ffffffff161061087057600080fd5b6002826040518082805190602001908083835b602083106108a25780518252601f199092019160209182019101610883565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405190819003902054600160a060020a03331660009081526006602052604090206002015490915060ff161561092457600160a060020a03331660009081526006602052604090206001018054820190556109d6565b606060405190810160409081528482526020808301849052600182840152600160a060020a033316600090815260069091522081518190805161096b929160200190610b4a565b50602082015181600101556040820151600291909101805460ff19169115159190911790555060048054600181016109a38382610bec565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191633600160a060020a03161790555b60008054600163ffffffff740100000000000000000000000000000000000000008084048216929092018116820277ffffffff00000000000000000000000000000000000000001990931692909217928390556003549204161415610a43576009805460ff191660011790555b505050565b600054600160a060020a031681565b60015481565b6004805482908110610a6b57fe5b600091825260209091200154600160a060020a0316905081565b6003805482908110610a9357fe5b90600052602060002090016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b385780601f10610b0d57610100808354040283529160200191610b38565b820191906000526020600020905b815481529060010190602001808311610b1b57829003601f168201915b505050505081565b60095460ff165b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b8b57805160ff1916838001178555610bb8565b82800160010185558215610bb8579182015b82811115610bb8578251825591602001919060010190610b9d565b50610bc4929150610c0c565b5090565b815481835581811511610a4357600083815260209020610a43918101908301610c26565b815481835581811511610a4357600083815260209020610a439181019083015b610b4791905b80821115610bc45760008155600101610c12565b610b4791905b80821115610bc4576000610c408282610c49565b50600101610c2c565b50805460018160011615610100020316600290046000825580601f10610c6f5750610c8d565b601f016020900490600052602060002090810190610c8d9190610c0c565b505600a165627a7a72305820220154855032aed6f523ea3ad1073e846ca31415bc2b5557b9ebd1304f701d470029',
   gas_price: 1500000
}
