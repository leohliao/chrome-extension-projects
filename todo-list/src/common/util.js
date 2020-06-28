const getTodoRecords = () => {
  const body = {
    "app": 414,
    "query": 'isComplete in ("No") order by due_date asc limit 20',
    "fields": ["$id", "task_type", "due_date", "task", "task_detail"]
  };
  kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function (resp) {
    // success
    console.log(resp);
  }, function (error) {
    // error
    console.log(error);
  });
}

export {
  getTodoRecords
};