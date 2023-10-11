# Day1 計時器
<label>開始時間： </label>
<input type="datetime-local" v-model="stime1">

<table>
<thead>
  <tr>
    <th>章節</th> <th>預計時間</th> <th>預計開始時間</th> <th>預計結束時間</th>
  </tr>
</thead>
<tbody>
  <tr v-for="item in time1">
	<td>{{item.text}}</td> <td>{{item.t}} min</td> <td>{{item.stime.format('HH:mm:ss')}}</td> <td>{{item.etime.format('HH:mm:ss')}}</td>
  </tr>
</tbody>
</table>

<label> 休息時間： </label>
<input type="number" v-model="qk"> min

<table>
<thead>
  <tr>
    <th>章節</th> <th>預計時間</th> <th>預計開始時間</th> <th>預計結束時間</th>
  </tr>
</thead>
<tbody>
  <tr v-for="item in time2">
	<td>{{item.text}}</td> <td>{{item.t}} min</td> <td>{{item.stime.format('HH:mm:ss')}}</td> <td>{{item.etime.format('HH:mm:ss')}}</td>
  </tr>
</tbody>
</table>

<script setup>
  import { ref, computed } from 'vue'
  import dayjs from 'dayjs'
  import workshop from '../../docs/\.vitepress/sidebar/workshop'

  const stime1=ref(new Date())
  const qk = ref(15)

const time1 = computed(()=>{
  let t = dayjs(stime1.value)
  const items = workshop[0].items.map(x=>x)
  items.forEach(x=>{
    x.stime = t
    x.etime = t.add(x.t,'minute')
    t = x.etime
  })
  return items
}) 
const time2 = computed(()=>{
  let t = time1.value[time1.value.length - 1].etime.add(qk.value, 'minute')
  const items = workshop[1].items.map(x=>x)
  items.forEach(x=>{
    x.stime = t
    x.etime = t.add(x.t,'minute')
    t = x.etime
  })
  return items
}) 

</script>