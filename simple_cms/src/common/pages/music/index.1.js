import React, { Component } from 'react';
import {Table,Select} from 'antd';
import fetchJsonp from 'fetch-jsonp';
const Option = Select.Option;

class Music extends Component {
  constructor(props){
    super(props);
    this.state={
      tData:[],
      loading:true //Is loading
    }
    this.data = [{
        key: '1',
        title: 'I Like It',
        author: 'Cardi B feat. Bad Bunny & J Balvin',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }, {
        key: '2',
        title: 'Nice for What',
        author: 'Drake',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }, {
        key: '3',
        title: 'No Tears Left to Cry',
        author: 'No Tears Left to Cry',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }, {
        key: '4',
        title: 'No Tears Left to Cry',
        author: 'No Tears Left to Cry',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }];
    this.columns = [
        {
            dataIndex: 'num',
            title: 'NO.',
            width: 50,
        },{
            dataIndex: 'title',
            title: 'Title',
            width: 200,
        }, {
            dataIndex: 'author',
            title: 'Singer',
            width: 200,
        }, {
            dataIndex: 'country',
            title: 'Country',
            width: 150,
        }, {
            dataIndex: 'language',
            title: 'Language',
            width: 200,
        }, {
            dataIndex: 'publishtime',
            title: 'Issue Time',
            width: 200,
        }];
     this.rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        //
        // getCheckboxProps: record => ({
        //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //   name: record.name,    //
        // }),
      };
  };
  getData = (typeId) =>{
    fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`, {
                method: 'GET'
      })
      .then((res) => {
          return res.json();
      })
    .then((res)=>{
      console.log(res);
      var songList = res.song_list;
      var arr=[];
      //Fetch data by iteration
      for(var i=0;i<songList.length;i++){
        arr.push({
          //key: songList[i].album_id,
          title: songList[i].album_title,
          author: songList[i].author,
          country: songList[i].country,
          language:songList[i].language,
          publishtime: songList[i].publishtime,
        })
      }
      this.setState({
        tData:arr,
        loading:false  //Cancle loading
      })
    }).catch((error)=>{
      console.log(error);
    })
  };
  componentDidMount () {  
    this.getData('2');  // Default is hot music
  };
  handleChange() {

  }

  render() {
    const data = [{name:'a',id:1},{name:'b',id:2},{name:'c',id:3}];
    return (
      <div>
        <Select defaultValue={data[0].name} style={{ width: 120 }} onChange={()=>this.handleChange}>
          {
            data.map((item,index)=><Option value={item.name}>{item.name}</Option>)
          }
        </Select>
          <Table 
          rowSelection={this.rowSelection} 
          columns={this.columns} 
          loading={this.state.loading}
          dataSource={this.state.tData.map((item,i)=>({...item,num:i+1}))} />
      </div>
    );
  }
}

export default Music;