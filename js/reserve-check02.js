let check = JSON.parse(sessionStorage.getItem("check"));
const tableBox = document.querySelector('.table-box');

tableBox.innerHTML = `
<table>
    <tbody>
        <tr>
            <th class="th-top">체험명</th>
            <td class="td-top" colspan="3">${check.pgName}</td>
        </tr>
        <tr>
            <th>예약일</th>
            <td>${check.selDate}</td>
            <td colspan="2">${check.turnValue}</td>
        </tr>
        <tr>
            <th>예약자 및 대표자 정보</th>
            <td>${check.repName}</td>
            <td>${check.repBirth}</td>
            <td>${check.repTel}</td>
        </tr>
        <tr>
            <th class="th-bottom">총 인원</th>
            <td>성인 ${check.adultValue}명</td>
            <td>청소년 ${check.teenValue}명</td>
            <td>유아 ${check.childValue}명</td>
        </tr>
    </tbody>
</table>
`

