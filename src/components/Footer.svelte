<footer>
  <div>
    <a href="http://lifeni.life" target="_blank" rel="noopener noreferrer">
      主页
    </a>
    <span> / </span>
    <a href="http://lab.lifeni.life" target="_blank" rel="noopener noreferrer">
      实验室
    </a>
    <span> / </span>
    <a
      href="http://status.lifeni.life"
      target="_blank"
      rel="noopener noreferrer"
    >
      Status Page
    </a>
    <span> / </span>
    <a
      href="http://git.lifeni.life/liangfengning"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gitea
    </a>
    <span> / </span>
    <a href="http://code.lifeni.life" target="_blank" rel="noopener noreferrer">
      JupyterLab
    </a>
  </div>
</footer>

<style lang="less">
  footer {
    position: relative;
    width: 100%;
    margin: 36px 0 0 0;
    padding: 36px 0 0 0;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    white-space: nowrap;
    transition: all 0.2s;

    @media (max-width: 1120px) {
      margin: 48px 0 -12px 0;
      padding: 24px 0 0 0;
    }

    @media (max-width: 480px) {
      margin: 36px 0 -12px 0;
    }

    div {
      display: flex;
      width: 100%;
      overflow-x: hidden;
    }

    a,
    span {
      position: relative;
      width: 100%;
      max-width: fit-content;
      margin: 0 1rem 0 0;
      padding: 0 0 4px 0;
      color: var(--font-secondary);
      font-size: 1rem;
      line-height: 2rem;
      font-weight: normal;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-decoration: none;
      transition: all 0.2s;
    }
  }
</style>
