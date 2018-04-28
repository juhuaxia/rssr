import request from "superagent"

const getData = async (api)=>{
    var res = await request.get(api);
    return res;
}

export default getData