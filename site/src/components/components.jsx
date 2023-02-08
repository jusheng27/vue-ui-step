import { defineComponent } from 'vue';
import semver from 'semver';
import siteConfig from '../../site.config';
import packageJson from '@/package.json';

const { docs: routerList } = JSON.parse(JSON.stringify(siteConfig).replace(/component:.+/g, ''));

const currentVersion = packageJson.version.replace(/\./g, '_');
const registryUrl = 'https://mirrors.tencent.com/npm/tdesign-vue-next';

// 过滤小版本号
function getVersions(versions = [], deep = 1) {
  const versionMap = Object.create(null);

  versions.forEach((v) => {
    const nums = v.split('.');
    versionMap[nums[deep]] = v;
  });

  return Object.values(versionMap)
    .sort((a, b) => {
      return semver.gt(b, a) ? -1 : 1;
    })
    .filter((v) => !v.includes('alpha') && !v.includes('patch'));
}

export default defineComponent({
  data() {
    return {
      loaded: false,
      version: packageJson.version,
      options: [],
    };
  },

  computed: {
    contentStyle() {
      const { loaded } = this;
      return { visibility: loaded ? 'visible' : 'hidden' };
    },
  },

  mounted() {
    this.$refs.tdDocAside.routerList = routerList;
    this.$refs.tdDocAside.onchange = ({ detail }) => {
      if (this.$route.path === detail) return;
      this.loaded = false;
      this.$router.push(detail);
      window.scrollTo(0, 0);
    };
    this.initHistoryVersions();
  },

  methods: {
    initHistoryVersions() {
      fetch(registryUrl)
        .then((res) => res.json())
        .then((res) => {
          const options = [];
          const versions = getVersions(Object.keys(res.versions));
          versions.forEach((v) => {
            const nums = v.split('.');
            if (nums[0] === '0' && nums[1] < 6) return false;
            options.unshift({ label: v, value: v.replace(/\./g, '_') });
          });
          this.options.push(...options);
        });
    },

    getAttach() {
      return document.querySelector('#historyVersion');
    },
    contentLoaded(callback) {
      requestAnimationFrame(() => {
        this.loaded = true;
        callback();
      });
    },
    changeVersion(version) {
      if (version === currentVersion) return;
      const historyUrl = `//${version}-tdesign-vue-next.surge.sh`;
      window.open(historyUrl, '_blank');
      this.$nextTick(() => {
        this.version = packageJson.version;
      });
    },
  },

  render() {
    return (
      <td-doc-layout>
        <td-header ref="tdHeader" slot="header" disabledTheme={true} />

        <td-doc-aside ref="tdDocAside" title="Vue UI step by step">
          <t-select
            id="historyVersion"
            slot="extra"
            value={this.version.replace(/\./g, '_')}
            popupProps={{ zIndex: 500, attach: this.getAttach }}
            onChange={this.changeVersion}
            options={this.options}
          />
        </td-doc-aside>
        <router-view style={this.contentStyle} onLoaded={this.contentLoaded} />
        <td-theme-generator />
      </td-doc-layout>
    );
  },
});
