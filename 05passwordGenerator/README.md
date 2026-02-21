<h2>Today's Implementation — Random Password Generator</h2>

<p>
Built a dynamic password generator application to properly understand React Hooks behavior in a real use-case.
The password updates automatically based on selected options and can be copied directly to clipboard.
</p>

<h3>Concepts Practiced</h3>

<ul>
<li><b>useState</b> — managed length, numbers, characters, and password state</li>
<li><b>useEffect</b> — regenerated password automatically when dependencies changed</li>
<li><b>useCallback</b> — memoized generator & copy functions to prevent unnecessary recreation</li>
<li><b>useRef</b> — accessed DOM input field directly for selecting & copying text</li>
</ul>

<h3>Features</h3>

<ul>
<li>Adjustable password length</li>
<li>Include numbers option</li>
<li>Include special characters option</li>
<li>Auto-generation on change</li>
<li>One-click clipboard copy</li>
</ul>