const LANG_EN_US = {
    ACCOUNT: 'Account',
    ADD_TO_CART: 'Add to Cart',
    CART: 'Cart',
    CART_ACK: {
        ADD: 'Item added to cart',
        REMOVE: 'Remove Item from cart',
    },
    DELIVERY_CHARGES: 'Delivery Charges',
    DISCOUNT: 'Discount',
    FAV_ACK_DEL: 'Remove Item from wishlist',
    ITEM: {
        SINGULAR: 'Item', PLURAL: 'Items'
    },
    CATEGORIES: {
        'appliances': 'Appliances',
        'electronics': 'Electronics',
        'fashion': 'Fashion',
        'furnitures': 'Furnitures',
        'kitchen': 'Kitchen',
        'medicine': 'Medicine',
        'skincare': 'Skincare',
        'mobiles': 'Mobiles'
    } as { [key:string]: string },
    CONFIRMATION: 'Are you sure ?',
    CONTINUE: 'Continue',
    COUPONS: 'Coupons',
    EMAIL: 'Email-ID',
    ERROR: {
        server: 'Oops, something went wrong on our side'
    },
    FREE_DELIVERY: 'FREE Delivery',
    GO_TO_CART: 'Go to Cart',
    HELP_CENTER: 'Help Center',
    HOME: 'Home',
    JOIN: 'Join',
    LOGIN: {
        self: 'Log in',
        title: 'Log in for the best experience',
        titleAccount: 'Log in to get exclusive offers',
        descNumber: 'Enter your phone number to continue',
        descEmail: 'Enter your email address to continue'
    },
    LOGOUT: 'Log Out',
    NO: 'No',
    NOTIFICATIONS: 'Notifications',
    ORDERS: 'Orders',
    PHONE_NUMBER: 'Phone Number',
    PRICE: 'Price',
    PRICE_DETAILS: 'Price Details',
    REMOVE: 'Remove',
    SAVE_FOR_LATER: 'Save for later',
    SAVE_AMOUNT: (amount: any) => `You will save ${amount} on this order`,
    SEARCH_PLACEHOLDER: 'shirts for men',
    SEARCH_PRODUCTS: 'Search for products',
    SHOPS: 'Shops',
    SIGNUP: {
        self: 'Sign Up',
        title: 'Looks like you\'re new here',
        descNumber: 'Enter your phone number to continue',
        descEmail: 'Enter your email address to continue'
    },
    SORT_BY: 'Sort By',
    T_AND_S: [
        'By continuing, you agree to Flipkart\'s',
        'Terms of Use',
        'and',
        'Privacy Policy',
    ],
    TOTAL_AMOUNT: 'Total Amount',
    USE_PHONE: 'Use Phone Number',
    USE_EMAIl: 'Use Email-ID',
    WISHLIST: 'Wishlist',
    YES: 'Yes'
};

export default LANG_EN_US;