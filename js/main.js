const api_key = 'AIzaSyBgRldfomRBMNoipsSTKYAmfOarH1iIu8o';
const playList_id = 'PL_gXk6OSOQ5LVWytUDP2MgKhA1-A5h1TJ';
const base_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const result_url = `${base_url}?part=snippet&&key=${api_key}&&playlistId=${playList_id}&&maxResults=5`;
/* 
브라우저 URL을 통해서 데이터 요청 방식 GET 방식
요청 URL : 기본값URL?name=value&name=value
QueryString : 기본 요청 URL.enldp ?뒤쪽으로 name=value 쌍으로 옵션을 담아서 전달하는 방식
https://console.cloud.google.com/apis/library/youtube.googleapis.com?hl=ko&project=redsunmap-1569760786189
https://console.cloud.google.com/apis/credentials?hl=ko&project=redsunmap-1569760786189
https://developers.google.com/youtube/v3/docs/playlistItems/list?hl=ko
*/
// console.log(result_url);

fetch(result_url)
	.then((data) => data.json)
	.then((json) => console.log(json));
