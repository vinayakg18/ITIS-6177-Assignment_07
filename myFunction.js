export const handler = async (event) => {
    const keyword = event.queryStringParameters.keyword || 'world';
    const name = "Vinayakraddi Giriyammanavar";
    const message = `${name} says ${keyword}`;
    
    return {
        statusCode: 200,
        body: JSON.stringify({ message }),
    };
};