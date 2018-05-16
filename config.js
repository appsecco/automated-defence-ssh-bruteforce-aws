module.exports = {
	region: "us-east-1",										// AWS Region to deploy in, ACL must be in the same region
	accessToken: "XXXXXXXXXXXXXXXXXXXXXXXX",	                // Access token used authorize requests to block IPs
	aclId: "acl-xxxxxxxx", 										// Id of the ACL that will be used for blocking
	stateTableName: "ip_block_state", 							// DynamoDB table that will be created to maintain current state
    historyTableName: "ip_block_history",                       // DynamoDB table that will be created to maintain action history
    ruleValidity: 2                                           	// Time (in minutes) after which the IP is unblocked
}

// Used by serverless.yml to dermine deployment region
module.exports.getRegion = function (){
    return module.exports.region
}