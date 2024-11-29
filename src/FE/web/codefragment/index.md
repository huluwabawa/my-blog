# web代码片段

## element-ui
### el-table合并列
```js
let pos = 0 // 记录合并的起始位置
let spanArr = 0 // 合并的行数
let xiangmid = ''  // 合并的比较值，想通则合并
const tableGroup = ({row, column, rowIndex, columnIndex}) => {
    if (columnIndex === 0) {
      // columnIndex 合并第几列
      xiangmid = row.xiangmuid
      
      if( rowIndex == pos){
        for ( pos ; pos < overallProgressData.value.length; pos++) {
          if (overallProgressData.value[pos].xiangmuid == xiangmid) {
            spanArr++
          }else {
            break
          }
        }
        let rowspan = spanArr
        spanArr = 0
        return {
          rowspan: rowspan,
          colspan: 1
        }
      }else {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
  }
    if(rowIndex == overallProgressData.value.length-1){
      pos = 0
    }
}
```