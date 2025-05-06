export var CreatePostError;
(function (CreatePostError) {
    CreatePostError[CreatePostError["BAD_REQUEST"] = 0] = "BAD_REQUEST";
    CreatePostError[CreatePostError["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
})(CreatePostError || (CreatePostError = {}));
export var GetPostError;
(function (GetPostError) {
    GetPostError[GetPostError["BAD_REQUEST"] = 0] = "BAD_REQUEST";
})(GetPostError || (GetPostError = {}));
export var GetMePostError;
(function (GetMePostError) {
    GetMePostError[GetMePostError["BAD_REQUEST"] = 0] = "BAD_REQUEST";
})(GetMePostError || (GetMePostError = {}));
export var DeletePostError;
(function (DeletePostError) {
    DeletePostError[DeletePostError["NOT_FOUND"] = 0] = "NOT_FOUND";
    DeletePostError[DeletePostError["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
})(DeletePostError || (DeletePostError = {}));
