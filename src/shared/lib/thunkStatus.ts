import { Action } from "@reduxjs/toolkit";

function isPending(action: Action) {
	return action.type.endsWith("pending");
}
function isRejected(action: Action) {
	return action.type.endsWith("rejected");
}
function isFulfilled(action: Action) {
	return action.type.endsWith("fulfilled");
}

export { isFulfilled, isPending, isRejected };
