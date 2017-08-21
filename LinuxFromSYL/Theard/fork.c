#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys.h>

#define err_sys(info)

{
	printf("%s\n", info);
	
	exit(0);
}

int glob = 6; /* external variable in initialized data */

char buf[] = "a write to stdout\n";
	
int main(void)
{
	int var;
	pid_t pid;
	var = 88;

	if ((write(STDOUT_FILENO, buf, sizeof(buf)-1) != sizeof(buf) -1))
		err_sys("write error");
		
	printf("befor fork\n");/* we don't flunsh stdout */

	if ( (pid =fork() <  0){
		err_sys("fork error");
	}else if( pid ==0){
	/* child */ 
		glob++;
		war++;
		}else{
			sleep(2); /* parent */ 
	}


printf("pid = %d, ppid = %d, glob = %d, var = %d\n",getpid(), getppid(),glob,var);
	exit(0);
}

	
