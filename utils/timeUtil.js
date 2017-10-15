import moment from 'moment';

export default {
    toTime(utcTimeStr) {
        return utcTimeStr ? moment(utcTimeStr).format('YYYY-MM-DD HH:mm:ss') : '';
    },

    toDate(utcTimeStr) {
        return utcTimeStr ? moment(utcTimeStr).format('YYYY-MM-DD') : '';
    },

    toUtcTime(utcTimeStr) {
        return moment(utcTimeStr).utc().format('YYYY-MM-DD HH:mm:ss');
    },

    utcToMinute(utcTimeStr) {
        return utcTimeStr ? moment(utcTimeStr).format('YYYY-MM-DD HH:mm') : '';
    },

    utcToMonth(utcTimeStr) {
        return utcTimeStr ? moment(utcTimeStr).format('YYYY-MM') : '';
    },

    /**
     * 获取基于当前日期后 n 天时间
     *
     * @param {number | string} n 相隔时间数
     * @param {Date=} d 传入时间
     * @param {string=} type 计算单位，默认为 `days`
     * @return {string} 格式化日期字符 `YYYY-MM-DD`
     */
    getDateElse(n, d, type = 'days') {
        n = parseInt(n, 10);
        d = d || new Date();
        return moment(d).add(n, type).format('YYYY-MM-DD');
    },

    /**
     * 获取常用的时间区间
     *
     * @return {Object} 时间区间
     */
    getCommonTimeRanges() {
        return {
            '今天': [moment().startOf('day'), moment().endOf('day')],
            '昨天': [
                moment().add(-1, 'days').startOf('day'),
                moment().add(-1, 'days').endOf('day')
            ],
            '近七天': [
                moment().add(-6, 'days').startOf('day'),
                moment().endOf('day')
            ],
            '近30天': [
                moment().add(-29, 'days').startOf('day'),
                moment().endOf('day')
            ]
        };
    }
};
