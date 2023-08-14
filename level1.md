## Level - 1 (BASH): Find the largest log file in computer (x.log) and truncate it to 100 lines

### 1. Find largest log file(First filter with .log then sort desc and get First 1)
Get-ChildItem -Recurse -Filter "*.log" | Sort-Object Length -Descending | Select-Object -First 1

### 2. find log query
Get-ChildItem -Recurse -Filter "*.log"

### 3. Store into new variable for performing operations
$PowerLogFile = Get-ChildItem -Recurse -Filter "*.log" | Sort-Object Length -Descending | Select-Object -First 1

## Apply operation on newly create log  file i.e. "PowerLogFile"

### 1. Getting the data into log file
Get-Content $PowerLogFile.FullName

### 2. Select First 100
Get-Content $PowerLogFile.FullName | Select-Object -First 100

### 3. Set content according to select object
Get-Content $PowerLogFile.FullName | Select-Object -First 100 | Set-Content $PowerLogFile.FullName
