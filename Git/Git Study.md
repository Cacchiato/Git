# Git Study

## Catalog
- [Create a New Repository](#create-a-new-repository)
- [Initialize a Repository in an Existing Directory](#initialize-a-repository-in-an-existing-directory)
- [Add Files into the Repository](#add-files-into-the-repository)
- [Commit Files to the Repository](#commit-files-to-the-repository)
- [Modify Contents](#modify-contents)
- [Time Machine](#time-machine)
	- [1. Basic Concept](#1-basic-concept)
	- [2. Manage Modification](#2-manage-modification)
	- [3. Go back to the historical version](#3-go-back-to-the-historical-version)
	- [4. Remove Modification](#4-remove-modification)
	- [5. Delete Files](#5-delete-files)
- [Push the local repository to GitHub](#push-the-local-repository-to-github)
- [Push to a branch in a repository](#push-to-a-branch-in-a-repository)
	- [Clone the repository](#clone-the-repository)
	- [Create a new branch](#create-a-new-branch)
	- [Switch to your branch](#switch-to-your-branch)
	- [Update your working directory](#update-your-working-directory)
	- [Push your file into the repository](#push-your-file-into-the-repository)
	- [Delete a folder in remote repository](#delete-a-folder-in-remote-repository)
- [References](#references)

## Create a New Repository

## Initialize a Repository in an Existing Directory
```
$ git init
```
This creates a new subdirectory called `.git` which contains all of your necessary repository files - a Git repository skeleton. At this point, nothing in your project is tracked yet.
Note: `.git` file is hidden :wink:

![image 1](https://github.com/Cacchiato/leleNote/blob/master/Git/images/1.png) 

## Add Files into the Repository

```shell
$ git add <file_directory> //can be executed multiple times to add different files
$ git status  //check the status of your files
```
![image 2](https://github.com/Cacchiato/leleNote/blob/master/Git/images/2.png)

## Commit Files to the Repository

```
//use useful comment to describe the file content or current operation
$ git commit -m "your comment"  

//Add extended messages
$ git commit -m "
> 1) Continue adding content in the message
> 2) Second line of the extended message
> "
```
![image 3](https://github.com/Cacchiato/leleNote/blob/master/Git/images/3.png)

## Modify Contents 

```shell
//modify a file (e.g. "1.txt")
$ git status       //check its status
$ git diff        //check the detail information of modification
$ git add 1.txt  //re-add the file into the repository
$ git status
$ git commit -m "Modified 1.txt"   //re-commit the file into the repository
$ git status
```

## Time Machine
### 1. Basic Concept
>- a. Working Directory - catalog in the computer
>- b. Stage - temporary storage
>- c. Repository - version library 

![image 4](https://github.com/Cacchiato/leleNote/blob/master/Git/images/4.jpg)

```shell
$ git add - add the modified file into the Stage area
$ git commit - commit all the files in the Stage area to the current branch "master"
```
![img 5](https://github.com/Cacchiato/leleNote/blob/master/Git/images/5.png)

### 2. Manage Modification

```
Example 1
1st Modification --> git add --> 2nd Modification --> git commit
Analyze: 
1) 1st modification was added to Stage due to "git add"
2) 2nd modification was not added to Stage as it didn't operate "git add"
3) "git commit" will only commit the "1st modification" file to the current branch

Example 2
1st Modification --> git add --> 2nd Modification --> git add --> git commit
Analyze: 
1) 1st modification was added to Stage due to "git add"
2) 2nd modification was added to Stage due to "git add"
3) "git commit" will commit both files to the current branch
```
### 3. Go back to the historical version 

```shell
$ git log -pretty=oneline  //check version_ids of commits
$ git reset --hard HEAD^  //go back to the last version
$ git file               //check the content of the file
$ git reset --hard commit_version_id_in_log   
```

### 4. Remove Modification
```
$ git checkout -- file
```

### 5. Delete Files

```shell
Situation 1 - really want to delete the file
$ git rm test.txt                    //only removed "test.txt" from your "working directory"
$ git commit -m "remove test.txt"   //also remove "test.txt" in your repository

Situation 2 - delete the file by mistake and want to recover it
$ git rm test.txt                 //removed "test.txt" from your "working directory" by mistake 
$ git checkout -- test.txt       //recover to the latest version from your repository 
```

## Push the local repository to GitHub
```shell
$ git remote add origin repository_url   //default name of the repository is origin
$ git push -u origin master             //push the current branch master to the remote
```

## Push to a branch in a repository

### Clone the repository

```shell
$ git clone git@user_name:xxxx/xxxxxxxxxx.git
```
### Create a new branch

```shell
$ cd cloned_folder_name
$ git checkout -b new_branch_name
```
### Switch to your branch 

```shell
$ git checkout new_branch_name
```

### Update your working directory

```shell
$ cd working_folder
$ git add upload_file
$ git commit -m "message"
```

### Push your file into the repository

```
$ git push --set-upstream origin new_branch_name
```

### Delete a folder in remote repository
- [Remove directory from remote repository after adding them to `.gitignore`](https://stackoverflow.com/questions/7927230/remove-directory-from-remote-repository-after-adding-them-to-gitignore)
- [Two ways to delete a folder in GitHub repository](https://www.jianshu.com/p/286be61bb9b8)

```shell
$ git rm -r --cached some-directory
$ git commit -m 'Remove the now ignored directory "some-directory"'
$ git push origin master
```

## References
>1) [Git Tutorial by Michael Liao](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
>2) [Git Book](https://git-scm.com/book/en/v2)
