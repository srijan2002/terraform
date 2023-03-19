export const handler = async (event, context) => {

    const operation = event.operation

    if (operation == 'echo'){
        return({
            "message":"Fuck You"
        });
   }
   else{
    switch (operation) {
        case '+':
             return operation.num1+operation.num2;
             break;
        case '-':
             return operation.num1-operation.num2;
             break;
        case '*':
             return operation.num1*operation.num2;
             break;
        case '/':
             return operation.num1/operation.num2;
             break;
        default:
          return ('Unknown operation: ${operation}');
        }
   }
}