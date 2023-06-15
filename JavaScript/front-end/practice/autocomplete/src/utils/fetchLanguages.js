const request = async url => {
  const res = await fetch(url);

  if (res.ok) return await res.json();

  throw new Error('요청에 실패했습니다.');
};

const fetchLanguages = async keyword => {
  const url = `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${keyword}`;

  return request(url);
};

export default fetchLanguages;
