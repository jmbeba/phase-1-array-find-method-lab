// code your solution here
  const superbowlWin = (records) => {
    const foundResult = records.find((record)=>{
        return record.result === "W";
    })

    if(foundResult){
        return foundResult.year;
    }else{
        return undefined;
    }
  }