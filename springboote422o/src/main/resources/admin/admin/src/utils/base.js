const base = {
    get() {
        return {
            url : "http://localhost:8080/springboote422o/",
            name: "springboote422o",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboote422o/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Spring Boot的在线考试系统"
        } 
    }
}
export default base
