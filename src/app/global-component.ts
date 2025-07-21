export const GlobalComponent = {
    // Api Calling http://hectormontero1-001-site1.etempurl.com/api/
    API_URL : 'https://localhost:7172/',
    API_URLEMISION : 'https://localhost:7271/api/',
    headerToken : {'Authorization': `Bearer ${localStorage.getItem('token')}`},
    text: 'https://localhost:7271/api/',
    // Auth Api
    //AUTH_API:"https://api-node.themesbrand.website/auth/",
    AUTH_API:"https://localhost:7271/api/",
    AUTH_APIEMISION:"https://localhost:7271/api/",
    // Products Api
    product:'apps/product',
    productDelete:'apps/product/',

    // Orders Api
    order:'apps/order',
    orderId:'apps/order/',
    CURRENT_USER:'currentUser',
    Menu:'MenuAccesos',
    // Customers Api
    customer:'apps/customer',
}