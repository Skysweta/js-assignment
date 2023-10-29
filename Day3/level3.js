const now = new Date() ;
const year = now.getFullYear() ;
 const month = now.getMonth() + 1 ;
 const date = now.getDate() ;
 const hours = now.getHours() ;
 const minutes = now.getMinutes();
 console.log(`${year}/${month}/${date} ${hours}:${minutes}`) ;