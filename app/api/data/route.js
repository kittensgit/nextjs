export const GET = async () => {
    const data = {
        name: 'alex',
        age: 23,
    };
    return new Response(JSON.stringify(data));
};

export const POST = async (request) => {
    return new Response(request.body);
};
