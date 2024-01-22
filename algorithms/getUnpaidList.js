/**
 * Указывает в каких месяцах не были оплачены какие услуги
 * 
 * @param {Array} sortList      - Упорядоченный по массивам месяцам список оплаченных услуг
 * @param {Array} serviceList   - Список просматриваемых услуг за год
 * @param {Array} monthList     - Список просматриваемых месяцев
 * @returns {string}            - Список неоплаченных услуг по месяцам
 */

export function getUnpaidList (sortList, serviceList, monthList) {
    let unpaidList = ['не оплачены:'];

    for (let month = 0; month < sortList.length; month++) {
        if (unpaidList[unpaidList.length - 1] === (monthList[month - 1] + ':')) {
            unpaidList.pop();
        }

        unpaidList.push(monthList[month] + ':');
        const monthlyList = sortList[month];

        for (let unpaidMonth = 0, paidMonth = 0; unpaidMonth < serviceList.length; unpaidMonth++) {
            if (typeof(monthlyList[paidMonth]) === typeof(undefined)) {
                unpaidList.push(serviceList[unpaidMonth]);                
            } else if (monthlyList[paidMonth].includes(serviceList[unpaidMonth])) {
                paidMonth = paidMonth + 1;
            } else {
                unpaidList.push(serviceList[unpaidMonth]);
            }
        }
    }

    return unpaidList.join('\r\n');
}