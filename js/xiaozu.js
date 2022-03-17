<code class="hljs language-javascript">
<span class="hljs-keyword">if</span>
(<span class="hljs-variable language_">window</span>.<span class="hljs-property">$</span>) 
{  
    $(<span class="hljs-variable language_">window</span>)
.<span class="hljs-title function_">scroll</span>
(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)
{  
        <span class="hljs-keyword">if</span>
($(<span class="hljs-variable language_">document</span>)
	.<span class="hljs-title function_">scrollTop</span>() >= <span class="hljs-number">500</span>)
	{  
            $(<span class="hljs-string">"#backTop"</span>)
            .<span class="hljs-title function_">fadeIn</span>();  
        }
<span class="hljs-keyword">else</span> 
{  
   $(<span class="hljs-string">"#backTop"</span>).<span class="hljs-title function_">fadeOut</span>();  
   }  
    });  
}</code>  