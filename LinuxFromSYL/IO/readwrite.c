#include <stdio.h>
#include<stdlib.h>
#include <unistd.h>

int main(void)
{
	char buf[100];
	int num  =0;

	// get the keyborad input, Posix for file 

	if ((num = read(STDIN_FILENO, buf, 10)) ==-1){
		printf("read erroe");
		error(-1);
	}else{
	// 
		wrtie(STDOUT_FILENO,buf,num);
	}
	return 0;
}

	
