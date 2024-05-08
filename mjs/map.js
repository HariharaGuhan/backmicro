var personal=[{
    "firstname":"Hari",
    "lastname":"Guhan",
    "emailid":"hariharan08071999@gmail.com",
    "phoneNumber":6383909023,
    "password":8489609404,
    "address":"Palani",
    "alternate":{
        "addressline1":"8th ward",
        "addressline2":"balasamudram",
        "city":"palani",
        "state":"Tamilnadu",
        "country":"India",
        "pincode":624601
    }
}]
personal.map((v,i)=>(
    console.log(`firstname is ${v.firstname}and address link ${v.alternate.addressline1}`)
    ))