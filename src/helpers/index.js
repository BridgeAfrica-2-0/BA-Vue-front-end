import moment from 'moment'

import axios from "axios"

export const getRootSchemeForRedis = () => axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8)

export const date = (value) => moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a");

export const fullMediaLink = (media) => {

    console.log(media)

    if (media) {
        const scheme = axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8)
        const render = media.startsWith("https://www.youtube.com") ?
            media :
            media.startsWith(scheme) ?
            media :
            media.startsWith("/storage/") ? `${scheme}${media}` :
            media
        return render
    }
    return ""
}

export const fromNow = (dateTime) => (moment(dateTime).local("en" == localStorage.getItem('lang') ? "en" : "fr")).fromNow()


export const formatNumber = (num) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}


console.log(localStorage.getItem('lang'))

export const diffBetweenTwoDate = (end, start) => {
    const startDate = moment(start)
    const endDate = moment(end)

    return endDate.diff(startDate)
}

export const notification = (notification) => {

    const time = () => notification.created_at

    return `
    <div class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer">
        <div>
            <img src="${notification.avatar}" class="rounded-circle" alt="" width="30" height="30" />
        </div>
        <div class="d-flex flex-column ml-3">
            <div>${notification.notification_text}</div>
            <div class="small text-muted">
                <span class="text-capitalize">
                ${time()}
                </span>
            </div>
        </div>
    </div>
`}