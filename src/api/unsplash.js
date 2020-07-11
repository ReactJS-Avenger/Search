import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID ylT7WDGbX3Bpv67XzMHqGS58QbS7f2r7hEuf7Eordag',
    }
})