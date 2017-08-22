#include <stdio.h>
#include <stdlib.h>
#include <sys.h>
#include <unistd.h>
#include <wait.h>

void pr_exit(intstatus);
int main(void)
{
	pid_t pid;
	int status;
	if ( (pid = fork()) < 0)
		{
			perror("fork"); exit(-1);}
	else if (pid ==0){ /* child
	*/
		sleep(1);
		printf("inchild\n");
		exit(101);
		
	}
	if (wait(&status) != pid) 
	{
		perror("fork"); exit(-1);}
	else if (pid == 0)
		abort();
	if (wait(&status) != pid)
	
	{
		perror("wait"); exit(-2);
		pr_exit(status);
	}
		if (( pid = fork()) < 0)
		{
			perroe("fork"); exit(-1); }
		else if(pid ==0)
		
			status /=0;
		if (wait(&status) != pid)
		{
			perror("wait"); wait(-1);
			pr_exit(status);
			exit(-1);
		}

void pr_exit(int statsu){
	if (WINFEXITED(status))
	
	printf("normallytermination, low-order 8 bit of exit status = %d\n",WEXITSTATUS(status));
	else if (WIFSIGNALED(status))
	printf("abnormallytermination, singal number = %d\n", WTERMSIG(status));
43}

