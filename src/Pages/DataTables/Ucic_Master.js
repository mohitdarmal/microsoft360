import React from 'react';
import { Table, Layout } from 'antd';

const columns = [
  {
    title: 'Source System Name',
    width: 200,
    dataIndex: 'name',
    key: 'name',
    align : 'center',
    sorter: (a, b) => a.name.localeCompare(b.name),
    filters: [
      { text: 'John', value: 'John' },
      { text: 'Mike', value: 'Mike' },
    ],
    onFilter: (value, record) => record.name === value,
  },
  {
    title: 'Application Number',
    width: 200,
    dataIndex: 'age',
    key: 'age',
    align : 'center',
    sorter: (a, b) => a.age - b.age,

  },
  {
    title: 'Loan Account Number',
    dataIndex: 'address',
    key: '1',
    width: 200,
    align : 'center',
  },
  {
    title: 'Customer Number (CIF)',
    dataIndex: 'address',
    key: '2',
    width: 200,
    align : 'center',
  },
  {
    title: 'Account Status',
    dataIndex: 'address',
    key: '3',
    width: 200,
    align : 'center',
  },
  {
    title: 'UCIC',
    dataIndex: 'address',
    key: '4',
    width: 200,
    align : 'center',
  },
  {
    title: 'GUCIC',
    dataIndex: 'address',
    key: '5',
    width: 200,
    align : 'center',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Alisha ${i}`,
    age: 30,
    address: `London Park no. ${i}`,
  });
}

const { Content } = Layout;

const DataTables = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Layout>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: 'white',
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 'max-content',
            y: 400,
          }}
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  style={{
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                  }}
                />
              ),
            },
          }}
        />
      </Content>
    </Layout>
  </Layout>
);

export default DataTables;

