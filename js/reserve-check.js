const reserveInfoValue = JSON.parse(localStorage.getItem("reserveInfo"));
const tableBox = document.querySelector('.table-box');

console.log(reserveInfoValue);

tableBox.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <th class="th-top">체험명</th>
                    <td class="td-top" colspan="3">${reserveInfoValue[1]}</td>
                </tr>
                <tr>
                    <th>예약일</th>
                    <td>${reserveInfoValue[2]}</td>
                    <td colspan="2">${reserveInfoValue[6]}</td>
                </tr>
                <tr>
                    <th>예약자 및 대표자 정보</th>
                    <td>${reserveInfoValue[3]}</td>
                    <td>${reserveInfoValue[4]}</td>
                    <td>${reserveInfoValue[5]}</td>
                </tr>
                <tr>
                    <th class="th-bottom">총 인원</th>
                    <td>성인 ${reserveInfoValue[7]}명</td>
                    <td>청소년 ${reserveInfoValue[8]}명</td>
                    <td>유아 ${reserveInfoValue[9]}명</td>
                </tr>
            </tbody>
        </table>
`
