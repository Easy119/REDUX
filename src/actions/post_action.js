import getListRequest from "../services/post_api"

export const loadPostsAction = async (dispatch) => {
    let result = await getListRequest();
    dispatch({
        type: "LOAD_POSTS",
        payload: result.data
    })
}