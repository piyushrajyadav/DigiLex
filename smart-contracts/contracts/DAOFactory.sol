// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DAOFactory {
    struct DAO {
        string name;
        address contractAddress;
        address creator;
    }

    DAO[] public daos;
    event DAOCreated(address indexed contractAddress, address indexed creator);

    function createDAO(string memory _name) external {
        address newDAO = address(new DAO(_name));
        daos.push(DAO(_name, newDAO, msg.sender));
        emit DAOCreated(newDAO, msg.sender);
    }

    function getDAOCount() external view returns (uint256) {
        return daos.length;
    }
}

contract DAO {
    string public name;
    address public owner;

    constructor(string memory _name) {
        name = _name;
        owner = msg.sender;
    }
}