## Level - 1 (BASH): Find the largest log file in computer (x.log) and truncate it to 100 lines

## ->Find largest log file(First filter with .log then sort desc and get First 1)
Get-ChildItem -Recurse -Filter "*.log" | Sort-Object Length -Descending | Select-Object -First 1

## ->find log query
Get-ChildItem -Recurse -Filter "*.log"

## ->Store into new variable for performing operations
$PowerLogFile = Get-ChildItem -Recurse -Filter "*.log" | Sort-Object Length -Descending | Select-Object -First 1


## ->Apply operation on newly create log  file i.e. "PowerLogFile"

## ->Getting the data into log file
Get-Content $PowerLogFile.FullName

## ->Select First 100
2.Get-Content $PowerLogFile.FullName | Select-Object -First 100

## ->Set content according to select object
3.Get-Content $PowerLogFile.FullName | Select-Object -First 100 | Set-Content $PowerLogFile.FullName
