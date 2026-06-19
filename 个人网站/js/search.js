function searchData(titleKey,dateKey){
    let artResult = [];
    let medResult = [];
   
    articleList.forEach(item=>{
        let matchTitle = titleKey == "" || item.title.includes(titleKey);
        let matchDate = dateKey == "" || item.publish_date == dateKey;
        if(matchTitle && matchDate) artResult.push(item);
    })
    
    mediaList.forEach(item=>{
        let matchTitle = titleKey == "" || item.title.includes(titleKey);
        let matchDate = dateKey == "" || item.publish_date == dateKey;
        if(matchTitle && matchDate) medResult.push(item);
    })
    return {artResult,medResult};
}
