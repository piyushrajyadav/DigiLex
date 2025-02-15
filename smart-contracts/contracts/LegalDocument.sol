// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LegalDocument {
    struct Document {
        string hash;
        address owner;
        uint256 timestamp;
    }

    mapping(string => Document) private documents;
    event DocumentStored(string indexed hash, address indexed owner);

    function storeDocument(string memory _hash) external {
        require(bytes(_hash).length > 0, "Invalid document hash");
        documents[_hash] = Document(_hash, msg.sender, block.timestamp);
        emit DocumentStored(_hash, msg.sender);
    }

    function getDocument(string memory _hash) external view returns (Document memory) {
        return documents[_hash];
    }
}