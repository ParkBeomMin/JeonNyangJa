// module.exports = {
//     theme: {
//         extends: {
//             colors: {
//             },
//         },
//     },
// };

import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'key-color-light': '#2F2F31',
                'key-color-dark': '#543116',
            },
        },
    },
};
