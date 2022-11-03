export default (err) => {
  if (!(err instanceof Error)) {
    // 参数非error，构造一个error 以抛出完整调用链
    // eslint-disable-next-line no-param-reassign
    err = new Error(err);
  }
  (async (error) => {
    throw error;
  })(err);
};
