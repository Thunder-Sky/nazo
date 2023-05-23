/* 7で割ったら2余る2桁の数を探索(最低でも20以上)(青) */
q=[];
for(c=20;c<=99;c++){if(c%7==2)q.push(c)};
/* 紫のやつで、指定の数までで各位の数字の和が19,積が384のものを探す */
t=[]
for(c=1000;c<9999;c++){
    [a,b]=[0,1];
    String(c).split("").map(n=>{a+=Number(n),b*=Number(n)});
    if(a==19&&b==384){
        if(q.filter((t)=>c%t==19).length!=0) t.push(c)
    };
}
/* p配列は紫の候補 */
p=[];
for(a=0;a<t.length;a++){
    flag=true;
    for(c=2;c<t[a];c++){
        if(t[a]%c==0) flag=false;
    }
    if(flag) p.push(t[a]);
}

k=[];
for(c=4;c<=10000;c++){
    if(String(c).indexOf("4")!=-1){
        cnt=0;
        for(z=1;z<=c;z++){
            if(c%z==0) cnt++;
        }
        if(cnt==4){
            if(q.filter((x)=>c%x==11).length!=0) k.push(c);
        }
    }
}

console.log(`紫:${Math.min(...p)},水:${Math.min(...q.filter(x=>Math.min(...p)%x==19))},黄:${Math.min(...k.filter(x=>x%Math.min(...q.filter(x=>Math.min(...p)%x==19))==11))}`);
