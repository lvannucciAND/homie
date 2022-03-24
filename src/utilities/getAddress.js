import address from 'mocks/address.json';

export const getAddress = (postcode) => {
    const opts = address.filter(i => {
        const str = i.postcode.replace(/\s+/g, '').toLowerCase();
        return str.includes(postcode.toLowerCase());
    });

    return opts;
};