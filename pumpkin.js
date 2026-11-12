function weighPumpkin(pounds) {
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