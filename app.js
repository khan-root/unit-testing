export const greet =(name)=>{
    return `Hello, ${name}`
}

export const sumNumber=(num1, num2)=>{
    return num1 + num2
}



export function processOrder(data, dependencies){
    const paymentInfo = dependencies.processPayment(data.amount)
    return paymentInfo
}

function processPayment(amount){
    return {id: '123', amount: amount}
}



export function fetchData(userID){
    return{
        id: userID,
        name: 'Ali',
        roles: ['user', 'admin'],
        lastLogin: new Date('2025-05-26T18:59:01.907Z'),
        preference:{
            notifications: true, 
            theme: 'dark'
        }
    }
}