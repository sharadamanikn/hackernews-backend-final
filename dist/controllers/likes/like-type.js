export var LikePostError;
(function (LikePostError) {
    LikePostError[LikePostError["NOT_FOUND"] = 0] = "NOT_FOUND";
    LikePostError[LikePostError["ALREADY_LIKED"] = 1] = "ALREADY_LIKED";
    LikePostError[LikePostError["UNAUTHORIZED"] = 2] = "UNAUTHORIZED";
})(LikePostError || (LikePostError = {}));
export var GetLikePostError;
(function (GetLikePostError) {
    GetLikePostError[GetLikePostError["BAD_REQUEST"] = 0] = "BAD_REQUEST";
    GetLikePostError[GetLikePostError["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
})(GetLikePostError || (GetLikePostError = {}));
export var DeleteLikeError;
(function (DeleteLikeError) {
    DeleteLikeError[DeleteLikeError["NOT_FOUND"] = 0] = "NOT_FOUND";
    DeleteLikeError[DeleteLikeError["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
    DeleteLikeError[DeleteLikeError["LIKE_NOT_FOUND"] = 2] = "LIKE_NOT_FOUND";
})(DeleteLikeError || (DeleteLikeError = {}));
