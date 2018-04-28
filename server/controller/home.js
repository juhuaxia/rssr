import * as apis from "../apis"
import getData from "../data"

const swiperBanner = async ()=>{
    let res = await getData(apis.swiperBanner)
    if(res.ok && res.body){
        return res.body
    }else{
        return []
    }
}

const topicList = async ()=>{
    let res = await getData(apis.topicList)
    if(res.ok && res.body){
        return res.body.http_code == 200 ? res.body.data : []
    }else{
        return []
    }
}

const productList = async ()=>{
    let res = await getData(apis.topicList)
    if(res.ok && res.body){
        return res.body.http_code == 200 ? res.body.data : []
    }else{
        return []
    }
}

// export default function getHomeData(){
//     console.time('testForEach')
//     Promise.all([swipeBanner(),topicList(),productList()])
//     .then(res=>{
//         let homeData = {
//             swipeBanner:res[0].body,
//             topicList:res[1].body,
//             productList:res[2].body
//         }
//         console.timeEnd('testForEach')
//     })
// }

export default async function getHomeData(){
    console.time('testForEach')
    let [bannerData, topicData, productData] = await Promise.all([swiperBanner(),topicList(),productList()])
    let homeData = {
        swiperBanner: bannerData[1],
        nav: bannerData[2],
        topicList: topicData,
        productList: productData
    }
    console.timeEnd('testForEach')
    return homeData
}