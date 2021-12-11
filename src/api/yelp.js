import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 9Y2HFYgaMxflW4mSWBuToukRCn-qocCSAV-MZg3WRAKH95sxQs6LR_523u-5aVxYhHPrDFyl8u-mWXeHSg7xAYYzJujNaT4FdF68dB9JTzj0dkl3giff8x-8M360YXYx",
    }
});