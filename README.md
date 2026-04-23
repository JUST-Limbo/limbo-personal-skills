# limbo-personal-skills

本仓库用于维护可复用的 Agent Skills。下面是当前 skills 的简短说明与使用示例。

## Skills

### `git-branch-merge-flow`

- 功能：将当前分支的改动按固定流程同步到目标分支（必要时先提交并推送当前分支），再合并并推送目标分支；若冲突则停止在目标分支等待处理。
- Use example：

```text
/git-branch-merge-flow 合并到dev
```

```text
/git-branch-merge-flow 合并到release/yyy
```
