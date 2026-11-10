function weighPumpkin(pounds) {
  // Your code goes here 🎃
  // Under 10 pounds: "Mini"
  // 10 pounds up to (but not including) 50: "Carving"
  // 50 pounds up to (but not including) 1000: "Giant"
  // 1000 pounds or more: "Record Breaker!"
  if(pounds<10){
    return "Mini"
  }
  if(pounds>=10&&pounds<50){
    return "Carving"
  }
  if(pounds>=50&&pounds<1000){
    return "Giant"
  }
  if(pounds>=1000){
    return "Record Breaker!"
  }
}
